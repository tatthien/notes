<template>
    <header id="masthead" class="site-header" role="banner">
        <div class="container inner">
            <div id="logo" class="site-header__logo">
                <router-link :to="{ name: 'home' }">Thien's Notes</router-link>
            </div><!-- #logo -->

            <div id="submenu" class="site-header__submenu">
                <nav class="menu" role="navigation">
                    <a href="https://github.com/tatthien">#github</a>
                    <a href="https://twitter.com/tat_thien">@tat_thien</a>
                </nav>
            </div><!-- #sub-menu -->
        </div>
    </header><!-- .site-header -->
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    .site-header {
        padding: 15px 0;
        background-color: $color--primary;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 18px;
        .inner {
            display: flex;
            justify-content: space-between;
        }
        &__logo {
            a {
                font-family: $font-family--heading;
                color: #ffffff;
            }
        }
        &__submenu {
            a {
                color: #ffffff;
                font-weight: 700;
                display: inline-block;
                margin-left: 15px;
            }
        }
    }
</style>
